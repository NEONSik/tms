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
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "create_date")
    private Long createDate;
    @Column(name = "description")
    private String description;
    @Column(name = "due_date")
    private Long dueDate;
    @Column(name = "estimation")
    private Long estimation;
    @Column(name = "priority")
    private String priority;
    @Column(name = "status")
    private String status;
    @Column(name = "ticket_code")
    private String ticketCode;
    @Column(name = "update_date")
    private Long updateDate;
    @ManyToOne
    @JoinColumn(name = "assignee_id")
    private User assignee;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;
    @ManyToOne
    @JoinColumn(name = "reporter_id")
    private User reporter;

    @PrePersist
    public void onCreate() {
        long time = System.currentTimeMillis();
        createDate = time;
        updateDate = time;
        ticketCode = String.valueOf(time);
    }

    @PreUpdate
    public void onUpdate() {
        updateDate = System.currentTimeMillis();
    }
}
