package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.dto.ProjectDto;
import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project get(Long id) {
        return projectRepository.findById(id).get();
    }

    public Project create(Project project) {
        return projectRepository.save(project);
    }

    public Project update(Project project, Long id) {
        project.setId(id);
        return projectRepository.save(project);
    }

    public void delete(Long id) {
        projectRepository.deleteById(id);
    }

    public Page<Project> findAll(Integer page, Integer size, String sort, String projectCode) {
        if (page == null && size == null && sort == null) {
            if (projectCode == null) {
                return new PageImpl<>(projectRepository.findAll(), PageRequest.of(1, 1), 1);
            } else {
                return new PageImpl<>(projectRepository.findByProjectCode(projectCode), PageRequest.of(1,1), 1);
            }
        } else {
            String[] params = sort.split(",");
            Pageable pageRequest;
            if (params[1].equals("asc")) {
                pageRequest = PageRequest.of(page, size);
            } else {
                pageRequest = PageRequest.of(page, size, Sort.by(params[0]).descending());
            }
            return projectRepository.findAll(pageRequest);
        }
    }
}
