package mis.entity;


public class Carbon {
	private String detTime;	//检测时间
	private double firstLeft;   //滑板一剩余量
	private double secondLeft;   //滑板二剩余量
	public String getDetTime() {
		return detTime;
	}
	public void setDetTime(String detTime) {
		this.detTime = detTime;
	}
	public double getFirstLeft() {
		return firstLeft;
	}
	public void setFirstLeft(double firstLeft) {
		this.firstLeft = firstLeft;
	}
	public double getSecondLeft() {
		return secondLeft;
	}
	public void setSecondLeft(double secondLeft) {
		this.secondLeft = secondLeft;
	}
	public Carbon() {
		super();
	}
	
}
