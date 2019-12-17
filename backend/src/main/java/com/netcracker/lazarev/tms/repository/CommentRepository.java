package com.netcracker.lazarev.tms.repository;
import com.netcracker.lazarev.tms.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long>{
    List<Comment> findByTaskId(Long task_id);
}
