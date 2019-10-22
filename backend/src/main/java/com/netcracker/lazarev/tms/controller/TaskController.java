package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService TaskService) {
        this.taskService = TaskService;
    }

    @GetMapping
    private List<Task> getAll() {
        return taskService.getAll();
    }

    @GetMapping("/{id}")
    private Task get(@PathVariable(name = "id") Long id) {
        return taskService.get(id);
    }
    
    @PostMapping
    private Task create(@RequestBody Task task) {
        return taskService.create(task);
    }

    @PutMapping("/{id}")
    private Task create(@RequestBody Task task,
                        @PathVariable(name = "id") Long id) {
        return taskService.update(task, id);
    }

    @DeleteMapping("/{id}")
    private void create(@PathVariable(name = "id") Long id) {
        taskService.delete(id);
    }
}
