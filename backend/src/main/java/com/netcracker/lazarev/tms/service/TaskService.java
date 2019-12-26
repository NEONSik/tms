package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.dto.Converter;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.repository.TaskRepository;
import org.springframework.data.domain.*;
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

    public Page<Task> findAll(Integer page, Integer size, String sort, Long assigneeId) {
        if (page == null && size == null && sort == null) {
            if (assigneeId == null) {
                return new PageImpl<>(taskRepository.findAll(), PageRequest.of(1, 1), 1);
            } else {
                return new PageImpl<>(taskRepository.findByAssignee(assigneeId), PageRequest.of(1, 1), 1);
            }
        } else {
            String[] params = sort.split(",");
            Pageable pageRequest;
            if (params[1].equals("asc")) {
                pageRequest = PageRequest.of(page, size);
            } else {
                pageRequest = PageRequest.of(page, size, Sort.by(params[0]).descending());
            }
            return taskRepository.findAll(pageRequest);
        }
    }
}
