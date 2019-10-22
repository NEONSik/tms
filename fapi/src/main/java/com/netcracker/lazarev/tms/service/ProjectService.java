package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.model.Project;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ProjectService {
    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;

    public ProjectService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public Project get(Long id) {
        return restTemplate.getForObject(backendURL+"projects/"+id, Project.class);
    }

    public List<Project> getAll() {
        return Arrays.asList(restTemplate.getForObject(backendURL+"projects/", Project[].class));
    }

    public Project create(Project project) {
        return restTemplate.postForObject(backendURL+"projects/", project, Project.class);
    }

    public void update(Project project, Long id) {
        restTemplate.put(backendURL+"projects/"+id, project);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL+"projects/"+id);
    }
}
