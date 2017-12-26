package mis.entity;

public class Chart_device {
	private String detTime;	//统计时间
	private float devTemp; //机箱温度A
	private float devTemp2;   //机箱温度B
	private float tempcpu;    //cpu温度
	
	public float getDevTemp() {
		return devTemp;
	}
	public void setDevTemp(float devTemp) {
		this.devTemp = devTemp;
	}
	public float getDevTemp2() {
		return devTemp2;
	}
	public void setDevTemp2(float devTemp2) {
		this.devTemp2 = devTemp2;
	}
	public float getTempcpu() {
		return tempcpu;
	}
	public void setTempcpu(float tempcpu) {
		this.tempcpu = tempcpu;
	}
	public String getDetTime() {
		return detTime;
	}
	public void setDetTime(String detTime) {
		this.detTime = detTime;
	}
	public Chart_device() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
