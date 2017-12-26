package mis.entity;

import java.util.Date;

public class TrainBox {
	/**
	 * name:hjp
	 * time:2017/11/29
	 *
	 */
	private int id;         //id
    private int trainCounter;   //过车流水统计
	private String trainId; //车辆号
	private Date dateNow;	//过车时间
    private String iDName;  //车组号
	private int trainboxIndex; //过车序号
	private String axleNo;//轴数
	private String wheelBase;  // 轴距
	private String brakeNo;     //闸瓦数
	private int brakeThickness; //闸瓦厚度
	private String cameraType;//相机类型 0 是线程 1是面阵
	private String  channelNo; //通道编码
	private String pickNum; //图像个数
    private String photoPath ;//图片路径
    private String cheXiangNo; //车厢号

    public String getiDName() {
        return iDName;
    }

    public void setiDName(String iDName) {
        this.iDName = iDName;
    }

    public String getCheXiangNo() {
        return cheXiangNo;
    }

    public void setCheXiangNo(String cheXiangNo) {
        this.cheXiangNo = cheXiangNo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTrainCounter() {
        return trainCounter;
    }

    public void setTrainCounter(int trainCounter) {
        this.trainCounter = trainCounter;
    }

    public String getTrainId() {
        return trainId;
    }

    public void setTrainId(String trainId) {
        this.trainId = trainId;
    }

    public Date getDateNow() {
        return dateNow;
    }

    public void setDateNow(Date dateNow) {
        this.dateNow = dateNow;
    }

    public String getIDName() {
        return iDName;
    }

    public void setIDName(String iDName) {
        this.iDName = iDName;
    }

    public int getTrainboxIndex() {
        return trainboxIndex;
    }

    public void setTrainboxIndex(int trainboxIndex) {
        this.trainboxIndex = trainboxIndex;
    }

    public String getAxleNo() {
        return axleNo;
    }

    public void setAxleNo(String axleNo) {
        this.axleNo = axleNo;
    }

    public String getWheelBase() {
        return wheelBase;
    }

    public void setWheelBase(String wheelBase) {
        this.wheelBase = wheelBase;
    }

    public String getBrakeNo() {
        return brakeNo;
    }

    public void setBrakeNo(String brakeNo) {
        this.brakeNo = brakeNo;
    }

    public int getBrakeThickness() {
        return brakeThickness;
    }

    public void setBrakeThickness(int brakeThickness) {
        this.brakeThickness = brakeThickness;
    }

    public String getCameraType() {
        return cameraType;
    }

    public void setCameraType(String cameraType) {
        this.cameraType = cameraType;
    }

    public String getChannelNo() {
        return channelNo;
    }

    public void setChannelNo(String channelNo) {
        this.channelNo = channelNo;
    }

    public String getPickNum() {
        return pickNum;
    }

    public void setPickNum(String pickNum) {
        this.pickNum = pickNum;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public TrainBox() {
		super();
	}
	
	
	
}
