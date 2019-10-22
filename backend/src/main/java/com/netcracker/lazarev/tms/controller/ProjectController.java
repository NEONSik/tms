package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService ProjectService) {
        this.projectService = ProjectService;
    }

    @GetMapping
    private List<Project> getAll() {
        return projectService.getAll();
    }

    @GetMapping("/{id}")
    private Project get(@PathVariable(name = "id") Long id) {
        return projectService.get(id);
    }

    @PostMapping
    private Project create(@RequestBody Project project) {
        return projectService.create(project);
    }

    @PutMapping("/{id}")
    private Project create(@RequestBody Project project,
                        @PathVariable(name = "id") Long id) {
        return projectService.update(project, id);
    }

    @DeleteMapping("/{id}")
    private void create(@PathVariable(name = "id") Long id) {
        projectService.delete(id);
    }
}
