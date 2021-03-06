package com.netcracker.lazarev.tms.repository;

import com.netcracker.lazarev.tms.entity.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query(value="select  * from tasks join users on users.id=tasks.assignee_id where tasks.assignee_id=?",nativeQuery = true)
    List<Task> findByAssignee(Long assigneeId);
}
