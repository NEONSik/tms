package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.ProjectDto;
import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService ProjectService) {
        this.projectService = ProjectService;
    }

    @GetMapping
    private List<ProjectDto> getAll() {
        List<Project> projects = projectService.getAll();
        return projects.stream().map(Converter::toDto).collect(Collectors.toList());
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
