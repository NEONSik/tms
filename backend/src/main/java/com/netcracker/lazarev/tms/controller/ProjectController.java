package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.ProjectDto;
import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService ProjectService) {
        this.projectService = ProjectService;
    }

    @GetMapping
    public Page<ProjectDto> getAll(
            @RequestParam(value = "page", required = false) Integer page,
            @RequestParam(value = "size", required = false) Integer size,
            @RequestParam(value = "sort", required = false) String sort,
            @RequestParam(value = "projectCode", required = false) String projectCode) {
            return projectService.findAll(page, size, sort,projectCode).map(Converter::toDto);
    }

    @GetMapping("/{id}")
    private ProjectDto get(@PathVariable(name = "id") Long id) {
        Project project = projectService.get(id);
        return Converter.toDto(project);
    }

    @PostMapping
    private ProjectDto create(@RequestBody ProjectDto projectDto) {
        Project project = projectService.create(Converter.fromDto(projectDto));
        return Converter.toDto(project);
    }

    @PutMapping("/{id}")
    private ProjectDto update(@RequestBody ProjectDto projectDto,
                              @PathVariable(name = "id") Long id) {
        Project project = projectService.update(Converter.fromDto(projectDto), id);
        return Converter.toDto(project);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        projectService.delete(id);
    }
}
