package com.domain.house.service.impl;

import com.domain.house.entity.CountName;
import com.domain.house.entity.CountNameRent;
import com.domain.house.entity.House;
import com.domain.house.entity.ValueName;
import com.domain.house.mapper.HouseMapper;
import com.domain.house.service.IHouseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author BenOniShi
 * @since 2021-04-06
 */
@Service
public class HouseServiceImpl extends ServiceImpl<HouseMapper, House> implements IHouseService {

    @Autowired
    private HouseMapper houseMapper;

    @Override
    public List<CountNameRent> districtGroupCount(Integer min, Integer max) {
        return houseMapper.districtGroupCount(min,max);
    }

    @Override
    public List<CountName> layoutGroupCount(Integer min, Integer max) {
        return houseMapper.layoutGroupCount(min,max);
    }

    @Override
    public List<CountName> businessGroupCount(Integer min, Integer max) {
        return houseMapper.businessGroupCount(min,max);
    }

    @Override
    public List<ValueName> areaGroupCount(Integer min, Integer max) {
        return houseMapper.areaGroupCount(min,max);
    }


    @Override
    public List<ValueName> orientationGroupCount(Integer min, Integer max) {
        return houseMapper.orientationGroupCount(min,max);
    }

    @Override
    public List<ValueName> renovationGroupCount(Integer min, Integer max) {
        return houseMapper.renovationGroupCount(min,max);
    }

    @Override
    public List<ValueName> parkingGroupCount(Integer min, Integer max) {
        return houseMapper.parkingGroupCount(min,max);
    }

    @Override
    public List<ValueName> floorGroupCount(Integer min, Integer max) {
        return houseMapper.floorGroupCount(min,max);
    }

    @Override
    public List<ValueName> liftGroupCount(Integer min, Integer max) {
        return houseMapper.liftGroupCount(min,max);
    }


    @Override
    public List<ValueName> waterGroupCount(Integer min, Integer max) {
        return houseMapper.waterGroupCount(min,max);
    }

    @Override
    public List<ValueName> kwhGroupCount(Integer min, Integer max) {
        return houseMapper.kwhGroupCount(min,max);
    }

    @Override
    public List<ValueName> gasGroupCount(Integer min, Integer max) {
        return houseMapper.gasGroupCount(min,max);
    }

    @Override
    public List<ValueName> heatingGroupCount(Integer min, Integer max) {
        return houseMapper.heatingGroupCount(min,max);
    }

    @Override
    public List<CountName> top20RentBusiness(Integer min, Integer max) {
        return houseMapper.top20RentBusiness(min,max);
    }

    @Override
    public List<CountName> top10AvgRent(Integer min, Integer max) {
        return houseMapper.top10AvgRent(min,max);
    }

    @Override
    public List<CountName> reciprocal10AvgRent(Integer min, Integer max) {
        return houseMapper.reciprocal10AvgRent(min,max);
    }

    @Override
    public List<House> mapPoint(Integer min, Integer max) {
        return houseMapper.mapPoint(min,max);
    }

    @Override
    public List<CountNameRent> businessGroupByOfRent(Integer min, Integer max) {
        return houseMapper.businessGroupByOfRent(min,max);
    }
}
