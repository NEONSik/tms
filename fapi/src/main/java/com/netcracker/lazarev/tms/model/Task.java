package com.netcracker.lazarev.tms.model;


import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class Task {
    private Long id;
    private Long createDate;
    @NotEmpty
    private String description;
    @NotNull
    private Long dueDate;
    @NotNull
    private Long estimation;
    @NotNull
    private String priority;
    @NotNull
    private String status;
    private String ticketCode;
    private Long updateDate;
    @NotNull
    private User assignee;
    @NotNull
    private Project project;
    private User reporter;
}
