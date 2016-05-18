package com.example.sabbirhossain.imageprinting.view;

import android.content.Context;
import android.graphics.Point;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.RelativeLayout;


public class ViewPortViewForNID extends RelativeLayout {
    DisplayMetrics displayMetrics = new DisplayMetrics();
    static int deviceWidth, deviceHeight;
    Button btntl, btntr, btnbl, btnbr;
    LayoutParams paramtl, paramtr, parambl, parambr;
    Context context;

    public ViewPortViewForNID(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.context = context;
    }

    public ViewPortViewForNID(Context context, AttributeSet attrs) {
        super(context, attrs);
        this.context = context;
    }

    public ViewPortViewForNID(Context context) {
        super(context);
        this.context = context;
    }

    @Override
    public void setLayoutParams(android.view.ViewGroup.LayoutParams params) {
        WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        Point size = new Point();
        display.getSize(size);
        deviceWidth = size.x;
        deviceHeight = size.y;
        Log.v("DeviceSize", deviceWidth + "x" + deviceHeight);
        LayoutParams rlParams = (LayoutParams) params;


        rlParams = new LayoutParams(deviceWidth - 200, deviceHeight - 120);

        super.setLayoutParams(rlParams);
    }

    public void setViewPortLayout() {

        //	setBackgroundResource(R.drawable.viewport_border);

    }

}
