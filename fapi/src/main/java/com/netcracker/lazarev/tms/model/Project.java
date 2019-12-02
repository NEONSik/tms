package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class Project {
    private Long id;
    @NotBlank
    private String projectCode;
    @NotBlank
    private String summary;
    private User projectManager;
}
