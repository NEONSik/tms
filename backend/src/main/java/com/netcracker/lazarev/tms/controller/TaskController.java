package com.netcracker.lazarev.tms.controller;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.dto.TaskDto;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.service.TaskService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService TaskService) {
        this.taskService = TaskService;
    }

    @GetMapping
    private Page<TaskDto> getAll(
            @RequestParam(value="page", required = false) Integer page,
            @RequestParam(value="size", required = false) Integer size,
            @RequestParam(value="sort", required = false) String sort,
            @RequestParam(value="assigneeId", required = false) Long assigneeId) {
    return taskService.findAll(page,size,sort,assigneeId).map(Converter::toDto);
    }

    @GetMapping("/{id}")
    private TaskDto get(@PathVariable(name = "id") Long id) {
        Task task = taskService.get(id);
        return Converter.toDto(task);
    }

    
    @PostMapping
    private TaskDto create(@RequestBody TaskDto taskDto) {
        Task task = taskService.create(Converter.fromDto(taskDto));
        return Converter.toDto(task);
    }

    @PutMapping("/{id}")
    private TaskDto update(@RequestBody TaskDto taskDto,
                           @PathVariable(name = "id") Long id) {
        Task task = taskService.update(Converter.fromDto(taskDto), id);
        return Converter.toDto(task);
    }

    @DeleteMapping("/{id}")
    private void delete(@PathVariable(name = "id") Long id) {
        taskService.delete(id);
    }
}
