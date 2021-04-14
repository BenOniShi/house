package com.domain.house.controller;

import com.domain.house.entity.CountName;
import com.domain.house.entity.ValueName;
import com.domain.house.service.IHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
    public Map districtGroupCount(){
        List<CountName> countNames = houseService.districtGroupCount();
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        return map;
    }


    /**
     * TOP10户型（柱状图）
     * @return
     */
    @RequestMapping("layoutGroupCount")
    @ResponseBody
    public Map layoutGroupCount(){
        List<CountName> countNames = houseService.layoutGroupCount();
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
    public Map businessGroupCount(){
        List<CountName> countNames = houseService.businessGroupCount();
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
    public List areaGroupCount(){
        List<ValueName> countNames = houseService.areaGroupCount();
        return countNames;
    }

    /**
     * 房屋朝向 （饼图）
     * @return
     */
    @RequestMapping("orientationGroupCount")
    @ResponseBody
    public List orientationGroupCount(){
        List<ValueName> countNames = houseService.orientationGroupCount();
        return countNames;
    }


    /**
     * 装修 （饼图）
     * @return
     */
    @RequestMapping("renovationGroupCount")
    @ResponseBody
    public List renovationGroupCount(){
        List<ValueName> countNames = houseService.renovationGroupCount();
        return countNames;
    }

    /**
     * 车位 （饼图）
     * @return
     */
    @RequestMapping("parkingGroupCount")
    @ResponseBody
    public List parkingGroupCount(){
        List<ValueName> countNames = houseService.parkingGroupCount();
        return countNames;
    }

    /**
     * 楼层 （饼图）
     * @return
     */
    @RequestMapping("floorGroupCount")
    @ResponseBody
    public List floorGroupCount(){
        List<ValueName> countNames = houseService.floorGroupCount();
        return countNames;
    }

    /**
     * 电梯 （饼图）
     * @return
     */
    @RequestMapping("liftGroupCount")
    @ResponseBody
    public List liftGroupCount(){
        List<ValueName> countNames = houseService.liftGroupCount();
        return countNames;
    }

    /**
     * 用水 （饼图）
     * @return
     */
    @RequestMapping("waterGroupCount")
    @ResponseBody
    public List waterGroupCount(){
        List<ValueName> countNames = houseService.waterGroupCount();
        return countNames;
    }

    /**
     * 用电 （饼图）
     * @return
     */
    @RequestMapping("kwhGroupCount")
    @ResponseBody
    public List kwhGroupCount(){
        List<ValueName> countNames = houseService.kwhGroupCount();
        return countNames;
    }

    /**
     * 燃气 （饼图）
     * @return
     */
    @RequestMapping("gasGroupCount")
    @ResponseBody
    public List gasGroupCount(){
        List<ValueName> countNames = houseService.gasGroupCount();
        return countNames;
    }

    /**
     * 采暖 （饼图）
     * @return
     */
    @RequestMapping("heatingGroupCount")
    @ResponseBody
    public List heatingGroupCount(){
        List<ValueName> countNames = houseService.heatingGroupCount();
        return countNames;
    }

    /**
     * Top20商圈租金排名 （柱状图）
     * @return
     */
    @RequestMapping("top20RentBusiness")
    @ResponseBody
    public List top20RentBusiness(){
        List<CountName> countNames = houseService.top20RentBusiness();
        return countNames;
    }


    /**
     * 每平米租金 top 10
     */
    @RequestMapping("top10AvgRent")
    @ResponseBody
    public Map top10AvgRent(){
        List<CountName> countNames =  houseService.top10AvgRent();
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
    public Map reciprocal10AvgRent(){
        List<CountName> countNames =  houseService.reciprocal10AvgRent();
        List<Integer> count = countNames.stream().map(CountName::getCount).collect(Collectors.toList());
        List<String> name = countNames.stream().map(CountName::getName).collect(Collectors.toList());
        Map<String,List> map = new HashMap();
        map.put("name", name);
        map.put("count", count);
        return map;
    }








}
