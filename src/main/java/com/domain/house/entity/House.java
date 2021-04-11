package com.domain.house.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import java.io.Serializable;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * <p>
 *
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
@ApiModel(value = "House对象", description = "")
public class House implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    @ApiModelProperty(value = "行政区")
    private String district;

    @ApiModelProperty(value = "商圈")
    private String business;

    @ApiModelProperty(value = "小区")
    private String quarters;

    @ApiModelProperty(value = "房型")
    private String layout;

    @ApiModelProperty(value = "特点")
    private String characteristic;

    @ApiModelProperty(value = "面积")
    private String area;

    @ApiModelProperty(value = "朝向")
    private String orientation;

    @ApiModelProperty(value = "楼层")
    private String floor;

    @ApiModelProperty(value = "电梯")
    private String lift;

    @ApiModelProperty(value = "车位")
    private String parking;

    @ApiModelProperty(value = "用水")
    private String water;

    @ApiModelProperty(value = "用电")
    private String kwh;

    @ApiModelProperty(value = "燃气")
    private String gas;

    @ApiModelProperty(value = "采暖")
    private String heating;

    @ApiModelProperty(value = "装修")
    private String renovation;

    @ApiModelProperty(value = "租期")
    private String tenancy;

    @ApiModelProperty(value = "租赁方式")
    private String leasing;

    @ApiModelProperty(value = "付款方式")
    private String payment;

    @ApiModelProperty(value = "租金")
    private String rent;

    @ApiModelProperty(value = "押金")
    private String deposit;

    @ApiModelProperty(value = "中介费")
    private String agencyFee;

    @ApiModelProperty(value = "经度")
    private String longitude;

    @ApiModelProperty(value = "纬度")
    private String latitude;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getBusiness() {
        return business;
    }

    public void setBusiness(String business) {
        this.business = business;
    }

    public String getQuarters() {
        return quarters;
    }

    public void setQuarters(String quarters) {
        this.quarters = quarters;
    }

    public String getLayout() {
        return layout;
    }

    public void setLayout(String layout) {
        this.layout = layout;
    }

    public String getCharacteristic() {
        return characteristic;
    }

    public void setCharacteristic(String characteristic) {
        this.characteristic = characteristic;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getOrientation() {
        return orientation;
    }

    public void setOrientation(String orientation) {
        this.orientation = orientation;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getLift() {
        return lift;
    }

    public void setLift(String lift) {
        this.lift = lift;
    }

    public String getParking() {
        return parking;
    }

    public void setParking(String parking) {
        this.parking = parking;
    }

    public String getWater() {
        return water;
    }

    public void setWater(String water) {
        this.water = water;
    }

    public String getKwh() {
        return kwh;
    }

    public void setKwh(String kwh) {
        this.kwh = kwh;
    }

    public String getGas() {
        return gas;
    }

    public void setGas(String gas) {
        this.gas = gas;
    }

    public String getHeating() {
        return heating;
    }

    public void setHeating(String heating) {
        this.heating = heating;
    }

    public String getRenovation() {
        return renovation;
    }

    public void setRenovation(String renovation) {
        this.renovation = renovation;
    }

    public String getTenancy() {
        return tenancy;
    }

    public void setTenancy(String tenancy) {
        this.tenancy = tenancy;
    }

    public String getLeasing() {
        return leasing;
    }

    public void setLeasing(String leasing) {
        this.leasing = leasing;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }

    public String getRent() {
        return rent;
    }

    public void setRent(String rent) {
        this.rent = rent;
    }

    public String getDeposit() {
        return deposit;
    }

    public void setDeposit(String deposit) {
        this.deposit = deposit;
    }

    public String getAgencyFee() {
        return agencyFee;
    }

    public void setAgencyFee(String agencyFee) {
        this.agencyFee = agencyFee;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    @Override
    public String toString() {
        return "House{" +
                "id=" + id +
                ", district=" + district +
                ", business=" + business +
                ", quarters=" + quarters +
                ", layout=" + layout +
                ", characteristic=" + characteristic +
                ", area=" + area +
                ", orientation=" + orientation +
                ", floor=" + floor +
                ", lift=" + lift +
                ", parking=" + parking +
                ", water=" + water +
                ", kwh=" + kwh +
                ", gas=" + gas +
                ", heating=" + heating +
                ", renovation=" + renovation +
                ", tenancy=" + tenancy +
                ", leasing=" + leasing +
                ", payment=" + payment +
                ", rent=" + rent +
                ", deposit=" + deposit +
                ", agencyFee = " + agencyFee +
                ", longitude=" + longitude +
                ", latitude=" + latitude +
                "}";
    }
}
