package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.ProjectDto;
import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public Page<ProjectDto> getAll(
            @RequestParam(value = "page") int page,
            @RequestParam(value = "size") int size,
            @RequestParam(value = "sort") String sort) {
        return projectService.findAll(page, size, sort).map(Converter::toDto);
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
