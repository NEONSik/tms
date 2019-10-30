package com.netcracker.lazarev.tms.dto;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.entity.User;

public class Converter {

    public static User fromDto(UserDto userDto) {
        return new User(userDto.getId(),
                userDto.getPassword(),
                userDto.getRole(),
                userDto.getEmail());
    }

    public static UserDto toDto(User user) {
        return new UserDto(user.getId(),
                user.getPassword(),
                user.getRole(),
                user.getEmail());
    }

    public static Task fromDto(TaskDto taskDto) {
        return new Task(taskDto.getId(),
                taskDto.getCreateDate(),
                taskDto.getDescription(),
                taskDto.getDueDate(),
                taskDto.getEstimation(),
                taskDto.getPriority(),
                taskDto.getStatus(),
                taskDto.getTicketCode(),
                taskDto.getUpdateDate(),
                fromDto(taskDto.getAssignee()),
                fromDto(taskDto.getProject()),
                fromDto(taskDto.getReporter()));
    }

    public static TaskDto toDto(Task task) {
        return new TaskDto(task.getId(),
                task.getCreateDate(),
                task.getDescription(),
                task.getDueDate(),
                task.getEstimation(),
                task.getPriority(),
                task.getStatus(),
                task.getTicketCode(),
                task.getUpdateDate(),
                toDto(task.getAssignee()),
                toDto(task.getProject()),
                toDto(task.getReporter()));
    }

    public static Project fromDto(ProjectDto projectDto) {
        return new Project(projectDto.getId(),
                projectDto.getProjectCode(),
                projectDto.getSummary(),
                fromDto(projectDto.getProjectManager()));
    }

    public static ProjectDto toDto(Project project) {
        return new ProjectDto(project.getId(),
                project.getProjectCode(),
                project.getSummary(),
                toDto(project.getProjectManager()));
    }
}
