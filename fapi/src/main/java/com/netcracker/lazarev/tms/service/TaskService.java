package com.netcracker.lazarev.tms.service;


import com.netcracker.lazarev.tms.model.Page;
import com.netcracker.lazarev.tms.model.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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

    public Page<Task> getAll(int page,int size, String sort) {
        return exchangeAsPage(backendURL+"tasks"+getPageQuery(page,size,sort),new ParameterizedTypeReference<Page<Task>>(){});
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
    private String getPageQuery(int page, int size, String sort){
        return "?page="+page+"&size="+size+"&sort="+sort;
    }
    public <T> Page<T> exchangeAsPage(String uri,ParameterizedTypeReference<Page<T>> responseType){
        return restTemplate.exchange(uri,HttpMethod.GET,null,responseType).getBody();
    }
}
