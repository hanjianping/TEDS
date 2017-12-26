package mis.entity;

import java.util.Date;

public class Video {
	private String src;
	private String trainID;
	private Date devTime;	//搜索时间
	
	public Date getDevTime() {
		return devTime;
	}
	public void setDevTime(Date devTime) {
		this.devTime = devTime;
	}
	public String getSrc() {
		return src;
	}
	public void setSrc(String src) {
		this.src = src;
	}
	public String getTrainID() {
		return trainID;
	}
	public void setTrainID(String trainID) {
		this.trainID = trainID;
	}
	public Video() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
