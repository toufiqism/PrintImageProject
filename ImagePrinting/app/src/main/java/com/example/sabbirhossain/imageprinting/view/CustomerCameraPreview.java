package com.example.sabbirhossain.imageprinting.view;

import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.ImageFormat;
import android.hardware.Camera;
import android.os.Build;
import android.util.Log;
import android.view.Display;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.WindowManager;

import com.example.sabbirhossain.imageprinting.utility.AppConstant;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

/**
 * Created by Toufiq on 12/28/15.
 */
public class CustomerCameraPreview extends SurfaceView implements SurfaceHolder.Callback {


    Context mContext;
    Camera mCamera;
    SurfaceHolder mHolder;
    Camera.AutoFocusCallback myAutoFocusCallback;
    private String selectedFPDevice = "";
    SharedPreferences sharedPreference;
    SharedPreferences.Editor defaultSharedPreferencesEditor;
    String manufacturerName = "";

    public CustomerCameraPreview(Context context, Camera camera) {
        super(context);

        mContext = context;
        mCamera = camera;

        // Install a SurfaceHolder.Callback so we get notified when the
        // underlying surface is created and destroyed.
        mHolder = getHolder();
        mHolder.addCallback(this);
        // deprecated setting, but required on Android versions prior to 3.0
        mHolder.setType(SurfaceHolder.SURFACE_TYPE_HARDWARE);
        manufacturerName = Build.MANUFACTURER;

    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {

        try {
            mCamera.setPreviewDisplay(holder);
            mCamera.startPreview();
            mCamera.autoFocus(new Camera.AutoFocusCallback() {

                                  @Override
                                  public void onAutoFocus(boolean arg0, Camera arg1) {
                                      // TODO Auto-generated method stub

                                  }
                              }
            );

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {

        //TODO Auto-generated method stub


        mCamera.stopPreview();


        String rotation = "";

        Display display = ((WindowManager) mContext
                .getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();

		/*
         * currently activity fixed to portrait mode. but later if we want to
		 * support landscape mode then we need to handle rotation and
		 * orientation in below cases
		 */
        switch (display.getRotation()) {
            case Surface.ROTATION_0:
                rotation = "0 degree";
                mCamera.setDisplayOrientation(90);
                break;
            case Surface.ROTATION_90:
                rotation = "90 degree";
                mCamera.setDisplayOrientation(90);
                break;
            case Surface.ROTATION_180:
                rotation = "180 degree";
                mCamera.setDisplayOrientation(90);
                break;
            case Surface.ROTATION_270:
                rotation = "270 degree";
                //  mCamera.setDisplayOrientation(90);


                if (manufacturerName.contains(AppConstant.DEVICE_NAME_ECONNECT_EH)) {
                    mCamera.setDisplayOrientation(270);
                } else {
                    mCamera.setDisplayOrientation(90);
                }

                break;
            default:
                break;
        }

        Log.d(CustomerCameraPreview.class.getSimpleName(), "Surface Changed. height: " + height + " width: "
                + width + " rotation: " + rotation);

        // set some parameters for better photo in portrait mode
        Camera.Parameters params = mCamera.getParameters();
        params.setRotation(90);

        // this sets the orientation of the image to portrait but DOES NOT
        // changes width and height
        // so the image is w:640,h:480. it just opens in portrait mode in file
        // manager

        List<Camera.Size> previewSizes = params.getSupportedPreviewSizes();

        List<Camera.Size> pictureSizes = params.getSupportedPreviewSizes();

        Camera.Size previewSize = previewSizes.get(0);

        Camera.Size pictureSize = pictureSizes.get(0);

        // Logger.AddLog(TAG, "Camrepa Parametes : Preview Size : Width :"
        // + previewSize.width + " height :" + previewSize.height
        // + " Picture Size : Width " + pictureSize.width + " Height :"
        // + height);
        //

        Camera.Size bestSize = null;
        List<Camera.Size> sizeList = mCamera.getParameters()
                .getSupportedPreviewSizes();
        // bestSize = sizeList.get(1);
        for (int i = 0; i < sizeList.size(); i++) {
            // select 720*1280 rsolution i,e 720*1280=921600
            if ((sizeList.get(i).width * sizeList.get(i).height) <= 921600) {
                bestSize = sizeList.get(i);
                Log.d("Camrara Preview: ", "Height:" + bestSize.height
                        + "Width: " + bestSize.width);
                break;
            }
        }

        List<Integer> supportedPreviewFormats = params
                .getSupportedPreviewFormats();
        Iterator<Integer> supportedPreviewFormatsIterator = supportedPreviewFormats
                .iterator();
        while (supportedPreviewFormatsIterator.hasNext()) {
            Integer previewFormat = supportedPreviewFormatsIterator.next();
            Log.d("Camrara Preview: ", "previewFormat" + previewFormat);
            if (previewFormat == ImageFormat.JPEG) {

                params.setPreviewFormat(previewFormat);
            }
        }

        //params.setPreviewSize(720, 1280);
        //params.setPictureSize(720, 1280);


        // params.setPreviewSize(previewSize.width, previewSize.height);
        //  params.setPictureSize(pictureSize.width, pictureSize.height);


        // params.setPreviewSize(1024, 600); // this works
        // params.setPictureSize(1024, 600); // this works
        // camera assumes orientation landscape so width > height

		/* params.setJpegQuality(40); */
        params.setJpegQuality(60);
        mCamera.setParameters(params);

        try {
            mCamera.setPreviewDisplay(holder);
            mCamera.startPreview();
        } catch (IOException e) {
            Log.d(CustomerCameraPreview.class.getSimpleName(), "IOException: " + e.getMessage());
        } catch (Exception e) {
            Log.d(CustomerCameraPreview.class.getSimpleName(), "Exception: " + e.getMessage());
        }

    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        mCamera.stopPreview();
        mCamera.release();
    }

    private Camera.Size getOptimalPreviewSize(List<Camera.Size> sizes, int width, int height) {
        // Source: http://stackoverflow.com/questions/7942378/android-camera-will-not-work-startpreview-fails
        Camera.Size optimalSize = null;

        final double ASPECT_TOLERANCE = 0.1;
        double targetRatio = (double) height / width;

        // Try to find a size match which suits the whole screen minus the menu on the left.
        for (Camera.Size size : sizes) {

            if (size.height != width) continue;
            double ratio = (double) size.width / size.height;
            if (ratio <= targetRatio + ASPECT_TOLERANCE && ratio >= targetRatio - ASPECT_TOLERANCE) {
                optimalSize = size;
            }
        }

        // If we cannot find the one that matches the aspect ratio, ignore the requirement.
        if (optimalSize == null) {
            // TODO : Backup in case we don't get a size.
        }

        return optimalSize;
    }
}
