package mis.entity;

import java.util.Date;

public class Train {
	/**
	 * name:hjp
	 * time:2016/11/29
	 * 
	 */
	private int id;         //id
	private String trainId; //列车编号
	private String duanNo;  //端位号(列车编号的第13-14位组成)
	private int planeNo;    //受电弓序号
	private Date detTime;	//检测时间
	private double centerBiase; //中心线偏移
	private double lRAangle;   //左右倾斜角度
	private double fBAangle;    //前后倾斜角度
	private double press;       //碳滑板压力
	private double firstLeft;   //滑板一剩余量
	private double secondLeft;   //滑板二剩余量
	private double thirdLeft;   // 滑板三剩余量
	private double fourhtLeft;  //滑板四剩余量
	private String graphicPath;//激光图相对路径
	private String photoPath;  // 相机图相对路径
	private double jHeight;     // 
	private double firstLeft_Bak;
	private double secondLeft_Bak;//
	private double thirdLeft_Bak; //
	private double fourthLeft_Bak;//
	
	public double getFirstLeft_Bak() {
		return firstLeft_Bak;
	}
	public void setFirstLeft_Bak(double firstLeft_Bak) {
		this.firstLeft_Bak = firstLeft_Bak;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTrainId() {
		return trainId;
	}
	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}
	public String getDuanNo() {
		return duanNo;
	}
	public void setDuanNo(String duanNo) {
		this.duanNo = duanNo;
	}
	public int getPlaneNo() {
		return planeNo;
	}
	public void setPlaneNo(int planeNo) {
		this.planeNo = planeNo;
	}
	public Date getDetTime() {
		return detTime;
	}
	public void setDetTime(Date detTime) {
		this.detTime = detTime;
	}
	public double getCenterBiase() {
		return centerBiase;
	}
	public void setCenterBiase(double centerBiase) {
		this.centerBiase = centerBiase;
	}
	public double getlRAangle() {
		return lRAangle;
	}
	public void setlRAangle(double lRAangle) {
		this.lRAangle = lRAangle;
	}
	public double getfBAangle() {
		return fBAangle;
	}
	public void setfBAangle(double fBAangle) {
		this.fBAangle = fBAangle;
	}
	public double getPress() {
		return press;
	}
	public void setPress(double press) {
		this.press = press;
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
	public double getThirdLeft() {
		return thirdLeft;
	}
	public void setThirdLeft(double thirdLeft) {
		this.thirdLeft = thirdLeft;
	}
	public double getFourhtLeft() {
		return fourhtLeft;
	}
	public void setFourhtLeft(double fourhtLeft) {
		this.fourhtLeft = fourhtLeft;
	}
	public String getGraphicPath() {
		return graphicPath;
	}
	public void setGraphicPath(String graphicPath) {
		this.graphicPath = graphicPath;
	}
	public String getPhotoPath() {
		return photoPath;
	}
	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}
	public double getjHeight() {
		return jHeight;
	}
	public void setjHeight(double jHeight) {
		this.jHeight = jHeight;
	}
	public double getSecondLeft_Bak() {
		return secondLeft_Bak;
	}
	public void setSecondLeft_Bak(double secondLeft_Bak) {
		this.secondLeft_Bak = secondLeft_Bak;
	}
	public double getThirdLeft_Bak() {
		return thirdLeft_Bak;
	}
	public void setThirdLeft_Bak(double thirdLeft_Bak) {
		this.thirdLeft_Bak = thirdLeft_Bak;
	}
	public double getFourthLeft_Bak() {
		return fourthLeft_Bak;
	}
	public void setFourthLeft_Bak(double fourthLeft_Bak) {
		this.fourthLeft_Bak = fourthLeft_Bak;
	}
	public Train() {
		super();
	}
	
	
	
}
