package com.netcracker.lazarev.tms.model;

import lombok.Data;

@Data
public class Task {
    private Long id;
    private Long createDate;
    private String description;
    private Long dueDate;
    private Long estimation;
    private String priority;
    private String status;
    private String ticketCode;
    private Long updateDate;
    private User assignee;
    private Project project;
    private User reporter;
}
