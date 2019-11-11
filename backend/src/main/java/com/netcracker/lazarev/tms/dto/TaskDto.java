package com.netcracker.lazarev.tms.dto;

import com.netcracker.lazarev.tms.entity.Project;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.AssociationOverrides;
import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@Data
@Builder
public class TaskDto {
    private Long id;
    private Long createDate;
    private String description;
    private Long dueDate;
    private Long estimation;
    private String priority;
    private String status;
    private String ticketCode;
    private Long updateDate;
    private UserDto assignee;
    private ProjectDto project;
    private UserDto reporter;
}
