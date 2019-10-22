package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task get(Long id) {
        return taskRepository.findById(id).get();
    }

    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Task create(Task task) {
        return taskRepository.save(task);
    }

    public Task update(Task task, Long id) {
        task.setId(id);
        return taskRepository.save(task);
    }

    public void delete(Long id) {
        taskRepository.deleteById(id);
    }
}
