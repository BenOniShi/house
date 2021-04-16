package com.domain.house.controller;

import com.domain.house.entity.CountName;
import com.domain.house.entity.CountNameRent;
import com.domain.house.entity.House;
import com.domain.house.entity.ValueName;
import com.domain.house.service.IHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.xml.transform.Result;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author BenOniShi
 * @date 2021/4/6 18:52
 */
@Controller
public class HouseController {

    @Autowired
    private IHouseService houseService;

    @RequestMapping("index")
    public String index(){
        return "main";
    }

    /**
     * 各行政区房源数量（柱状图）
     * @return
     */
    @RequestMapping("districtGroupCount")
    @ResponseBody
    public Map districtGroupCount(Integer min,Integer max){
        List<CountNameRent> countNames = houseService.districtGroupCount(min,max);
        List<Integer> count = countNames.stream().map(CountNameRent::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountNameRent::getName).collect(Collectors.toList());
        List<Double> rent = countNames.stream().map(CountNameRent::getRent).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        map.put("rent", rent);
        return map;
    }


    /**
     * TOP10户型（柱状图）
     * @return
     */
    @RequestMapping("layoutGroupCount")
    @ResponseBody
    public Map layoutGroupCount(Integer min,Integer max){
        List<CountName> countNames = houseService.layoutGroupCount(min,max);
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        return map;
    }

    /**
     * TOP20商圈房源数量（柱状图）
     * @return
     */
    @RequestMapping("businessGroupCount")
    @ResponseBody
    public Map businessGroupCount(Integer min,Integer max){
        List<CountName> countNames = houseService.businessGroupCount(min,max);
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        return map;
    }


    /**
     * 面积南丁格尔 （玫瑰图）
     * @return
     */
    @RequestMapping("areaGroupCount")
    @ResponseBody
    public List areaGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.areaGroupCount(min,max);
        return countNames;
    }

    /**
     * 房屋朝向 （饼图）
     * @return
     */
    @RequestMapping("orientationGroupCount")
    @ResponseBody
    public List orientationGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.orientationGroupCount(min,max);
        return countNames;
    }


    /**
     * 装修 （饼图）
     * @return
     */
    @RequestMapping("renovationGroupCount")
    @ResponseBody
    public List renovationGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.renovationGroupCount(min,max);
        return countNames;
    }

    /**
     * 车位 （饼图）
     * @return
     */
    @RequestMapping("parkingGroupCount")
    @ResponseBody
    public List parkingGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.parkingGroupCount(min,max);
        return countNames;
    }

    /**
     * 楼层 （饼图）
     * @return
     */
    @RequestMapping("floorGroupCount")
    @ResponseBody
    public List floorGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.floorGroupCount(min,max);
        return countNames;
    }

    /**
     * 电梯 （饼图）
     * @return
     */
    @RequestMapping("liftGroupCount")
    @ResponseBody
    public List liftGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.liftGroupCount(min,max);
        return countNames;
    }

    /**
     * 用水 （饼图）
     * @return
     */
    @RequestMapping("waterGroupCount")
    @ResponseBody
    public List waterGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.waterGroupCount(min,max);
        return countNames;
    }

    /**
     * 用电 （饼图）
     * @return
     */
    @RequestMapping("kwhGroupCount")
    @ResponseBody
    public List kwhGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.kwhGroupCount(min,max);
        return countNames;
    }

    /**
     * 燃气 （饼图）
     * @return
     */
    @RequestMapping("gasGroupCount")
    @ResponseBody
    public List gasGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.gasGroupCount(min,max);
        return countNames;
    }

    /**
     * 采暖 （饼图）
     * @return
     */
    @RequestMapping("heatingGroupCount")
    @ResponseBody
    public List heatingGroupCount(Integer min,Integer max){
        List<ValueName> countNames = houseService.heatingGroupCount(min,max);
        return countNames;
    }

    /**
     * Top20商圈租金排名 （柱状图）
     * @return
     */
    @RequestMapping("top20RentBusiness")
    @ResponseBody
    public List top20RentBusiness(Integer min,Integer max){
        List<CountName> countNames = houseService.top20RentBusiness(min,max);
        return countNames;
    }


    /**
     * 每平米租金 top 10
     */
    @RequestMapping("top10AvgRent")
    @ResponseBody
    public Map top10AvgRent(Integer min,Integer max){
        List<CountName> countNames =  houseService.top10AvgRent(min,max);
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
       return map;
    }

    /**
     * 每平米租金 倒数10
     */
    @RequestMapping("reciprocal10AvgRent")
    @ResponseBody
    public Map reciprocal10AvgRent(Integer min,Integer max){
        List<CountName> countNames =  houseService.reciprocal10AvgRent(min,max);
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        return map;
    }


    @RequestMapping("mapPoint")
    @ResponseBody
    public List<House> mapPoint(Integer min,Integer max){
        return houseService.mapPoint(min,max);
    }


    @RequestMapping(value = "businessGroupByOfRent",method = RequestMethod.GET)
    @ResponseBody
    public Map businessGroupByOfRent(Integer min,Integer max){
        List<CountNameRent> countNames =  houseService.businessGroupByOfRent(min,max);
        List<Integer> count = countNames.stream().map(CountNameRent::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountNameRent::getName).collect(Collectors.toList());
        List<Double> rent = countNames.stream().map(CountNameRent::getRent).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        map.put("rent", rent);
        return map;
    }







}
