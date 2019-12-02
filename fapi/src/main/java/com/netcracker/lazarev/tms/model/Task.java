package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class Task {
    private Long id;
    @NotBlank
    private Long createDate;
    @NotBlank
    private String description;
    @NotBlank
    private Long dueDate;
    @NotBlank
    private Long estimation;
    @NotBlank
    private String priority;
    @NotBlank
    private String status;
    @NotBlank
    private String ticketCode;
    @NotBlank
    private Long updateDate;
    private User assignee;
    private Project project;
    private User reporter;
}
