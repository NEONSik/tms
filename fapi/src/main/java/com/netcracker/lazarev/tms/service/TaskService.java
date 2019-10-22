package com.netcracker.lazarev.tms.service;


import com.netcracker.lazarev.tms.model.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class TaskService {
    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;

    public TaskService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public Task get(Long id) {
        return restTemplate.getForObject(backendURL+"tasks/"+id, Task.class);
    }

    public List<Task> getAll() {
        return Arrays.asList(restTemplate.getForObject(backendURL+"tasks/", Task[].class));
    }

    public Task create(Task task) {
        return restTemplate.postForObject(backendURL+"tasks/", task, Task.class);
    }

    public void update(Task task, Long id) {
        restTemplate.put(backendURL+"tasks/"+id, task);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL+"tasks/"+id);
    }
}
