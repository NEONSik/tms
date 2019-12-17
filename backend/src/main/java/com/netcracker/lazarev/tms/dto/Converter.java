package com.netcracker.lazarev.tms.dto;

import com.netcracker.lazarev.tms.entity.Comment;
import com.netcracker.lazarev.tms.entity.Project;
import com.netcracker.lazarev.tms.entity.Task;
import com.netcracker.lazarev.tms.entity.User;


public class Converter {

    public static User fromDto(UserDto userDto) {
        return User.builder()
                .id(userDto.getId())
                .name(userDto.getName())
                .email(userDto.getEmail())
                .password(userDto.getPassword())
                .role(userDto.getRole())
                .build();
    }

    public static UserDto toDto(User user) {
        return UserDto.builder()
                .id(user.getId())
                .name(user.getName())
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
                .assignee(taskDto.getAssignee() != null ? fromDto(taskDto.getAssignee()) : null)
                .project(taskDto.getProject() != null ? fromDto(taskDto.getProject()) : null)
                .reporter(taskDto.getReporter() != null ? fromDto(taskDto.getReporter()) : null)
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
                .assignee(task.getAssignee() != null ? toDto(task.getAssignee()) : null)
                .project(task.getProject() != null ? toDto(task.getProject()) : null)
                .reporter(task.getReporter() != null ? toDto(task.getReporter()) : null)
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

    public static Comment fromDto(CommentDto commentDto) {
        return Comment.builder()
                .id(commentDto.getId())
                .content(commentDto.getContent())
                .user(commentDto.getUser() != null ? fromDto(commentDto.getUser()) : null)
                .task(commentDto.getTask() != null ? fromDto(commentDto.getTask()) : null)
                .build();
    }

    public static CommentDto toDto(Comment comment) {
        return CommentDto.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .user(comment.getUser() != null ? toDto(comment.getUser()) : null)
                .task(comment.getTask() != null ? toDto(comment.getTask()) : null)
                .build();
    }

}
