package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.model.Page;
import com.netcracker.lazarev.tms.model.Project;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ProjectService {
    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;

    public ProjectService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public Project get(Long id) {
        return restTemplate.getForObject(backendURL + "projects/" + id, Project.class);
    }

    public Page<Project> getAll(Integer page, Integer size, String sort, String projectCode) {
        return exchangeAsPAge(backendURL + "projects" + getPageQuery(page, size, sort, projectCode), new ParameterizedTypeReference<Page<Project>>() {
        });
    }

    public Project create(Project project) {
        return restTemplate.postForObject(backendURL + "projects/", project, Project.class);
    }

    public void update(Project project, Long id) {
        restTemplate.put(backendURL + "projects/" + id, project);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL + "projects/" + id);
    }

    private String getPageQuery(Integer page, Integer size, String sort, String projectCode) {
        String params;
        if (page == null && size == null && sort == null) {
            if (projectCode == null) {
                params = "";
            } else {
                params = "?projectCode" + projectCode;
            }
        }
            else{params="?page=" + page + "&size=" + size + "&sort=" + sort;}
            return params;
        }


    public <T> Page<T> exchangeAsPAge(String uri, ParameterizedTypeReference<Page<T>> responseType) {
        return restTemplate.exchange(uri, HttpMethod.GET, null, responseType).getBody();
    }
}
