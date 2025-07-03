package com.vilt.core.models.impl;

import com.vilt.core.models.PlayerModel;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables = Resource.class,
        adapters = PlayerModel.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class PlayerImpl implements PlayerModel {

    @ValueMapValue
    private String image;
    @ValueMapValue
    private String name;
    @ValueMapValue
    private String position;
    @ValueMapValue
    private String placeOfBirth;
    @ValueMapValue
    private Integer age;
    @ValueMapValue
    private Double height;


    @Override
    public String getImage() {
        return image;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getPosition() {
        return position;
    }

    @Override
    public String getPlaceOfBirth() {
        return placeOfBirth;
    }

    @Override
    public Integer getAge() {
        return age;
    }

    @Override
    public Double getHeight() {
        return height;
    }
}
