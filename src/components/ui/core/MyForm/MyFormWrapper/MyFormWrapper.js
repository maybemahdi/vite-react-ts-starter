/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { FormProvider, useForm } from 'react-hook-form';
import { ConfigProvider } from 'antd';
import { cn } from '@/lib/utils';
const MyFormWrapper = ({ onSubmit, className, children, defaultValues, resolver, }) => {
    const formConfig = {};
    if (defaultValues) {
        formConfig['defaultValues'] = defaultValues;
    }
    if (resolver) {
        formConfig['resolver'] = resolver;
    }
    const methods = useForm(formConfig);
    const { handleSubmit, reset } = methods;
    const submit = (data) => {
        onSubmit(data, reset); // Pass reset function to onSubmit
    };
    return (_jsx(ConfigProvider, { theme: {
            components: {
                Select: {
                    hoverBorderColor: '#1F4529',
                    activeBorderColor: '#1F4529',
                },
                Input: {
                    hoverBorderColor: '#1F4529',
                    activeBorderColor: '#1F4529',
                    colorText: '#1F4529',
                },
                Checkbox: {
                    colorBorder: '#1F4529',
                    colorPrimary: '#1F4529',
                    colorPrimaryHover: '#1F4529',
                },
                DatePicker: {
                    // colorPrimary: '#1F4529',
                    colorPrimaryHover: '#1F4529',
                    // colorBorder: '#1F4529',
                    // colorText: '#1F4529',
                    // colorTextDisabled: '#1F4529',
                },
            },
        }, children: _jsx(FormProvider, { ...methods, children: _jsx("form", { className: cn('', className), onSubmit: handleSubmit(submit), children: children }) }) }));
};
export default MyFormWrapper;
