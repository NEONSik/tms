package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.service.TaskService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/tasks")
public class TaskController {

    private final TaskService TaskService;

    public TaskController(TaskService TaskService) {
        this.TaskService = TaskService;
    }

    @GetMapping
    private List<Task> getAll() {
        return TaskService.getAll();
    }

    @GetMapping(value = "/{id}")
    private Task get(@PathVariable(name = "id") Long id) {
        return TaskService.get(id);
    }
}
