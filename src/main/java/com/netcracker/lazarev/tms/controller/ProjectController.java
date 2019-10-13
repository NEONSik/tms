package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/projects")
public class ProjectController {

    private final ProjectService ProjectService;

    public ProjectController(ProjectService ProjectService) {
        this.ProjectService = ProjectService;
    }

    @GetMapping
    private List<Project> getAll() {
        return ProjectService.getAll();
    }

    @GetMapping(value = "/{id}")
    private Project get(@PathVariable(name = "id") Long id) {
        return ProjectService.get(id);
    }
}
