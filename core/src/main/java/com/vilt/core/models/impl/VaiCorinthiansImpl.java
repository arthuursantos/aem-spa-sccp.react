package com.vilt.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.vilt.core.models.VaiCorinthiansModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables= SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = VaiCorinthiansImpl.RESOURCE_TYPE,
        adapters = ComponentExporter.class
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class VaiCorinthiansImpl implements VaiCorinthiansModel {

    protected static final String RESOURCE_TYPE = "aem-spa-sccp/components/vaicorinthians";

    @ValueMapValue
    private String title;

    @Override
    public String getTitle() {
        return title;
    }
}
