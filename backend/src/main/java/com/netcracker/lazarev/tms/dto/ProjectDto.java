package com.netcracker.lazarev.tms.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@AllArgsConstructor
@Data
@Builder
public class ProjectDto {
    private Long id;
    private String projectCode;
    private String summary;
    private UserDto projectManager;
}
