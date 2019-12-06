package com.netcracker.lazarev.tms.repository;

import com.netcracker.lazarev.tms.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByProjectCode(String projectCode);
}
