package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }
    public Project get(Long id){
        return projectRepository.findById(id).get();
    }

    public List<Project> getAll(){
        return projectRepository.findAll();
    }
}
