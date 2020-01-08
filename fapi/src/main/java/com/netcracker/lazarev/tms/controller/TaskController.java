package com.netcracker.lazarev.tms.controller;


import com.netcracker.lazarev.tms.model.Page;
import com.netcracker.lazarev.tms.model.Task;
import com.netcracker.lazarev.tms.service.TaskService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService TaskService) {
        this.taskService = TaskService;
    }
    @GetMapping
    public Page<Task> getAll(
            @RequestParam(value="page",required = false) Integer page,
            @RequestParam(value="size" ,required = false) Integer size,
            @RequestParam(value="sort",required = false) String sort,
            @RequestParam(value = "assigneeId",required = false) Long assigneeId) {
        return taskService.getAll(page,size,sort,assigneeId);
    }

    @GetMapping("/{id}")
    private Task get(@PathVariable(name = "id") Long id) {
        return taskService.get(id);
    }

    @PostMapping
    private Task create(@Valid @RequestBody Task task) {
        return taskService.create(task);
    }

    @PutMapping("/{id}")
    private void update(@RequestBody Task task,
                        @PathVariable(name = "id") Long id) {
        taskService.update(task, id);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        taskService.delete(id);
    }
}
