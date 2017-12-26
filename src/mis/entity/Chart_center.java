package mis.entity;


public class Chart_center {
	private String detTime;	//检测时间
	private double centerBiase; //中心线偏移
	public String getDetTime() {
		return detTime;
	}
	public void setDetTime(String detTime) {
		this.detTime = detTime;
	}
	public double getCenterBiase() {
		return centerBiase;
	}
	public void setCenterBiase(double centerBiase) {
		this.centerBiase = centerBiase;
	}
	public Chart_center() {
		super();
	}
	

}
