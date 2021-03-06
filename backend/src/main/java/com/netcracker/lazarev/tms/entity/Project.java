package com.netcracker.lazarev.tms.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "project_code")
    private String projectCode;
    @Column(name = "summary")
    private String summary;
    @ManyToOne
    @JoinColumn(name = "project_manager_id")
    private User projectManager;
}
