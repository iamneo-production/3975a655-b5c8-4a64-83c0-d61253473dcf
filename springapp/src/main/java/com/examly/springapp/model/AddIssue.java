 package com.examly.springapp.model;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;


@Entity
public class AddIssue {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int complaintId;
    private String complaintName;
    private String description;
    private String imageUrl;
    	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	private Date createdOn=new Date(System.currentTimeMillis()) ;


    public AddIssue() {


    }
    public AddIssue(String complaintName ,String description,String imageUrl) {
        super();

        this.complaintName=complaintName;
        this.description=description;
        this.imageUrl=imageUrl;


    }



    public String getComplaintName() {
        return complaintName;
    }

    public void setComplaintName(String complaintName) {
        this.complaintName = complaintName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
