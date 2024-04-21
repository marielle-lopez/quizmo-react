package marielle.lopez.quizmo.common;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@MappedSuperclass
public class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false, updatable = false)
	private Date createdAt;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date updatedAt;
	
	public BaseEntity() {};
	
	public BaseEntity(Long id, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	};
	
	public Long getId() {
		return this.id;
	};
	
	public void setId(Long id) {
		this.id = id;
	};
	
	public Date getCreatedAt() {
		return this.createdAt;
	};
	
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	};
	
	public Date getUpdatedAt() {
		return this.updatedAt;
	};
	
	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	};
	
	@PrePersist
	public void onCreate() {
		Date timestamp = new Date();
		this.createdAt = timestamp;
		this.updatedAt = timestamp;
	};
	
	@PreUpdate
	public void onUpdate() {
		this.updatedAt = new Date();
	};
}
