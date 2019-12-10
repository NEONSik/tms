package com.netcracker.lazarev.tms.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class Project {
    private Long id;
    @NotNull
    private String projectCode;
    @NotNull
    private String summary;
    private User projectManager;
}
