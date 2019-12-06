package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.model.Page;
import com.netcracker.lazarev.tms.model.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public Page<Project> getAll(
            @RequestParam(value = "page",required = false) Integer page,
            @RequestParam(value = "size",required = false) Integer size,
            @RequestParam(value = "sort",required = false) String sort,
            @RequestParam(value = "projectCode",required = false)String projectCode) {
        return projectService.getAll(page, size,sort,projectCode);
    }

    @GetMapping("/{id}")
    private Project get(@PathVariable(name = "id") Long id) {
        return projectService.get(id);
    }

    @PostMapping
    private Project create(@Valid @RequestBody Project project) {
        return projectService.create(project);
    }

    @PutMapping("/{id}")
    private void create(@RequestBody Project project,
                           @PathVariable(name = "id") Long id) {
        projectService.update(project, id);
    }

    @DeleteMapping("/{id}")
    private void create(@PathVariable(name = "id") Long id) {
        projectService.delete(id);
    }
}
