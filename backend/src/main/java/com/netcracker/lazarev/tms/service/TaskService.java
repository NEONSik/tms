package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.repository.TaskRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    //public List<Task> getAssigne(Long assigneeId){return taskRepository.findByAssignee(assigneeId);}
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Task create(Task task) {
        return taskRepository.save(task);
    }

    public Task update(Task task, Long id) {
        task.setId(id);
        Task bd = taskRepository.findById(id).get();
        Converter converter = new Converter();
        Task updateTask = converter.forUpdate(task, bd , id);
        return taskRepository.save(updateTask);
    }

    public void delete(Long id) {
        taskRepository.deleteById(id);
    }

    public Page<Task> findAll(int page, int size, String sort) {
        String params[] = sort.split(",");
        Pageable pageRequest;
        if (params[1].equals("asc"))
            pageRequest = PageRequest.of(page, size);
        else
            pageRequest = PageRequest.of(page, size, Sort.by(params[0]).descending());
        return taskRepository.findAll(pageRequest);
    }
}
