package mis.entity;

public class Chart_lean {
	private String detTime;	//检测时间
	private double lRAngle;   //左右倾斜角度
	private double fBAngle;    //前后倾斜角度
	public String getDetTime() {
		return detTime;
	}
	public void setDetTime(String detTime) {
		this.detTime = detTime;
	}

	public double getlRAngle() {
		return lRAngle;
	}
	public void setlRAngle(double lRAngle) {
		this.lRAngle = lRAngle;
	}
	public double getfBAngle() {
		return fBAngle;
	}
	public void setfBAngle(double fBAngle) {
		this.fBAngle = fBAngle;
	}
	public Chart_lean() {
		super();
	}
	
}
