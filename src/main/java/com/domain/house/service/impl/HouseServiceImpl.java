package com.domain.house.service.impl;

import com.domain.house.entity.CountName;
import com.domain.house.entity.House;
import com.domain.house.entity.ValueName;
import com.domain.house.mapper.HouseMapper;
import com.domain.house.service.IHouseService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<CountName> districtGroupCount() {
        return houseMapper.districtGroupCount();
    }

    @Override
    public List<CountName> layoutGroupCount() {
        return houseMapper.layoutGroupCount();
    }

    @Override
    public List<CountName> businessGroupCount() {
        return houseMapper.businessGroupCount();
    }

    @Override
    public List<ValueName> areaGroupCount() {
        return houseMapper.areaGroupCount();
    }


    @Override
    public List<ValueName> orientationGroupCount() {
        return houseMapper.orientationGroupCount();
    }

    @Override
    public List<ValueName> renovationGroupCount() {
        return houseMapper.renovationGroupCount();
    }

    @Override
    public List<ValueName> parkingGroupCount() {
        return houseMapper.parkingGroupCount();
    }

    @Override
    public List<ValueName> floorGroupCount() {
        return houseMapper.floorGroupCount();
    }

    @Override
    public List<ValueName> liftGroupCount() {
        return houseMapper.liftGroupCount();
    }


    @Override
    public List<ValueName> waterGroupCount() {
        return houseMapper.waterGroupCount();
    }

    @Override
    public List<ValueName> kwhGroupCount() {
        return houseMapper.kwhGroupCount();
    }

    @Override
    public List<ValueName> gasGroupCount() {
        return houseMapper.gasGroupCount();
    }

    @Override
    public List<ValueName> heatingGroupCount() {
        return houseMapper.heatingGroupCount();
    }

    @Override
    public List<CountName> top20RentBusiness() {
        return houseMapper.top20RentBusiness();
    }

    @Override
    public List<CountName> top10AvgRent() {
        return houseMapper.top10AvgRent();
    }

    @Override
    public List<CountName> reciprocal10AvgRent() {
        return houseMapper.reciprocal10AvgRent();
    }
}
