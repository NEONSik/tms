package com.netcracker.lazarev.tms.dto;

import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.entity.User;


public class Converter {

    public static User fromDto(UserDto userDto) {
        return User.builder()
                .id(userDto.getId())
                .email(userDto.getEmail())
                .password(userDto.getPassword())
                .role(userDto.getRole())
                .build();
    }

    public static UserDto toDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .password(user.getPassword())
                .role(user.getRole())
                .email(user.getEmail())
                .build();
    }

    public static Task fromDto(TaskDto taskDto) {
        return Task.builder()
                .id(taskDto.getId())
                .createDate(taskDto.getCreateDate())
                .description(taskDto.getDescription())
                .dueDate(taskDto.getDueDate())
                .estimation(taskDto.getEstimation())
                .priority(taskDto.getPriority())
                .status(taskDto.getStatus())
                .ticketCode(taskDto.getTicketCode())
                .updateDate(taskDto.getUpdateDate())
                .assignee(fromDto(taskDto.getAssignee()))
                .project(fromDto(taskDto.getProject()))
                .reporter(fromDto(taskDto.getReporter()))
                .build();
    }

    public static TaskDto toDto(Task task) {
        return TaskDto.builder()
                .id(task.getId())
                .createDate(task.getCreateDate())
                .description(task.getDescription())
                .dueDate(task.getDueDate())
                .estimation(task.getEstimation())
                .priority(task.getPriority())
                .status(task.getStatus())
                .ticketCode(task.getTicketCode())
                .updateDate(task.getUpdateDate())
                .assignee(toDto(task.getAssignee()))
                .project(toDto(task.getProject()))
                .reporter(toDto(task.getReporter()))
                .build();
    }

    public static Project fromDto(ProjectDto projectDto) {
        return Project.builder()
                .id(projectDto.getId())
                .projectCode(projectDto.getProjectCode())
                .summary(projectDto.getSummary())
                .projectManager(projectDto.getProjectManager() != null ? fromDto(projectDto.getProjectManager()) : null)
                .build();
    }

    public static ProjectDto toDto(Project project) {
        return ProjectDto.builder()
                .id(project.getId())
                .projectCode(project.getProjectCode())
                .summary(project.getSummary())
                .projectManager(project.getProjectManager() != null ? toDto(project.getProjectManager()) : null)
                .build();
    }
}
