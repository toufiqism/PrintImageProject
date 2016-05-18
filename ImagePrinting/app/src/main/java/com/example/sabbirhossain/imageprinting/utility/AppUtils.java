package com.example.sabbirhossain.imageprinting.utility;

import android.app.ProgressDialog;
import android.bluetooth.BluetoothAdapter;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;
import android.os.AsyncTask;
import android.os.Environment;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.widget.Toast;



import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Properties;

public class AppUtils {

    private static final String TAG = AppUtils.class.getSimpleName();
    public static final String AppName = "DOER";

    public static String LOG_FILE_NAME = "";
    public static String MOBILE_IMEI = "";

    //public static final int PHOTO_DIMENSION = 340; // 340 we use 1:1 aspect
    // ratio.
    // so width=height
    public static final int PHOTO_DIMENSION = 300;
    public static String PRINT_RECEIPT_TYPE = "";
    public static final String CHEQUE_PHOTO_PATH = "/DOER/Cropped_cheque_image.jpg";
    public static final String CHEQUE_CROPPED_IMAGE_NAME = "Cropped_cheque_image.jpg";

    public static String FOR_NEW_ACCOUNT_OPENING_OR_TRANSACTION = "";
    public static String FOR_TRANSACTION_OR_ACCOUNT_ACCTIVATE = "";
    public static String FOR_FUND_TRANSFER = "";
    public static String FOR_DEPOSIT_TYPE = "";
    public static String NETWORK_ERROR_MESSAGE = "";
    public static String BILL_COLLECTION_TOTAL_BILL = "";
    public static String BILL_COLLECTION_PBS_NAME = "";
    public static int No_OF_RETRY = 0;
    public static int No_OF_ACK_RETRY = 0;
    public static String RETRY_REQUEST_ID = "";
    public static boolean IS_RETRY = false;
    public static String IFR_REQUESt_ID = "";

    public static String FOR_AGENT_VERIFICATION = "";

    public static String SEARCH_BY = "";

    public static void clearRetryInfo() {
        No_OF_RETRY = 0;
        No_OF_ACK_RETRY = 0;
        RETRY_REQUEST_ID = "";
        IS_RETRY = false;

    }

    public static byte[] drawableToByteArray(int d, Context context) {

        Drawable drawable = context.getResources().getDrawable(d);

        Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, stream);
        byte[] bitMapData = stream.toByteArray();


        return bitMapData;
    }





    public static File getChequeImageFile() {
        return getOutputFileForCheque("Cheque_Image");
    }

    public static File getCroppedChequeImageFile() {
        return getOutputFileForCheque(CHEQUE_CROPPED_IMAGE_NAME);
    }

    private static File getOutputFileForCheque(String FileNameCheque) {
        File mediaStoreageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStoreageDirCheque.exists()) {
            if (!mediaStoreageDirCheque.mkdirs()) {
                PrintError("Failed to create Directory");
                return null;
            }

        }
        File mediaFileForCheque = new File(mediaStoreageDirCheque.getPath() + File.separator + FileNameCheque + ".jpg");
        if (mediaFileForCheque.exists())
            mediaFileForCheque.delete();

        return mediaFileForCheque;

    }

    public static void ShowToast(Context context, String msg) {
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
    }

    public static void ShowToast(Context context, String msg, int duration) {

        if (duration == 0) {
            Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
        } else if (duration == 1) {
            Toast.makeText(context, msg, Toast.LENGTH_LONG).show();

        }
    }

    public static boolean isNetworkAvailable(Context c) {
        ConnectivityManager cm = (ConnectivityManager) c.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return netInfo != null && netInfo.isConnectedOrConnecting();
    }

    public static String addFractionPartInAmount(String amount) {
        return new String(amount.substring(0, amount.indexOf('.')) + ".00");

    }

    /**
     * Prints the message of an exception to log and shows a toast
     *
     * @param error error message
     */
    public static void PrintError(String error) {
        Log.d("CustomCameraModule", error);
        // AppUtils.ShowToast(context, error);
    }

    public static Boolean IsCameraAvailable(Context context) {
        return context.getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA);
    }

    public static File getFile(String fileName) {
        return GetNextOutputFile(fileName);
    }

    public static File getImageFile() {
        return GetNextOutputFile("Image");
    }

    public static File getCroppedImageFile() {
        return GetNextOutputFile("Image_crop");
    }

    public static void deleteImageFolder() {
        File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                AppName);

        if (mediaStorageDir.exists()) {

            for (File file : mediaStorageDir.listFiles()) {
                file.delete();
            }

            mediaStorageDir.delete();
        }

    }

    /**
     * Create a File for saving the image
     */
    private static File GetNextOutputFile(String fileName) {

        File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                AppName);

        if (!mediaStorageDir.exists()) {
            if (!mediaStorageDir.mkdirs()) {
                PrintError("failed to create directory");

                return null;
            }
        }

        File mediaFile = new File(mediaStorageDir.getPath() + File.separator + fileName + ".jpg");
        if (mediaFile.exists())
            mediaFile.delete();

        return mediaFile;
    }

    public static boolean isImageFileExist(String filePath) {

        File mediaFile = new File(filePath);
        if (mediaFile.exists())
            return true;
        else
            return false;

    }

    /**
     * functions for converting image to hex string
     */

    public static byte[] convertFileToByte(String filePath) {
        FileInputStream fileInputStream = null;

        // File file = new File("d:\\uploaded\\Redis_Cluster.pdf");
        File file = new File(filePath);

        byte[] bFile = new byte[(int) file.length()];

        try {
            // convert file into array of bytes
            fileInputStream = new FileInputStream(file);
            fileInputStream.read(bFile);
            fileInputStream.close();

            for (int i = 0; i < bFile.length; i++) {
                System.out.print((char) bFile[i]);
            }

            System.out.println("Done");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return bFile;
    }

    public static void convertByteToFile(byte[] bytes, File file) {
        // ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            // File someFile = new File(filePath);
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(bytes);
            fos.flush();
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String bytesToHexString(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }

    public static final byte[] hexStringToByteArray2(final String hex) {
        byte[] bytes = new byte[(hex.length() / 2)];
        int j = 0;
        for (int i = 0; i < bytes.length; i++) {
            j = i * 2;
            String hex_pair = hex.substring(j, j + 2);
            byte b = (byte) (Integer.parseInt(hex_pair, 16) & 0xFF);
            bytes[i] = b;
        }
        return bytes;
    }

    public static Bitmap createImageFromString(String hexString) {
        // File file = getFile("image_from_server");
        Bitmap bmp = null;
        try {
            byte[] barray = hexStringToByteArray2(hexString);
            bmp = BitmapFactory.decodeByteArray(barray, 0, barray.length);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bmp;
    }

    public static String[] getMagneticStripeInfo(String infoString) {

        String[] magInfos = infoString.split("\\^");

        return magInfos;

    }





    public static boolean isInternetAvailable(Context context) {

        boolean connected = false;
        ConnectivityManager connectivityManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_MOBILE)
                .getState() == NetworkInfo.State.CONNECTED
                || connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI)
                .getState() == NetworkInfo.State.CONNECTED) {
            // we are connected to a network
            connected = true;
        } else
            connected = false;

        return connected;
    }

    public static String getSystemDateTime(String dateTimeFormat) {
        Date date = new Date();
        SimpleDateFormat dateTimeFormatter = new SimpleDateFormat(dateTimeFormat);
        return dateTimeFormatter.format(date);

    }


    public static String formatDateForReceiptPrintDate(String timestamp) {
        SimpleDateFormat formatter;
        try {

            // formatter = new SimpleDateFormat("EEE MMM d, y KK:mm:ss aaa");
            formatter = new SimpleDateFormat("dd-MMM-yyyy hh:mm:ss aaa");

        } catch (Exception e) {
            formatter = new SimpleDateFormat("dd-MMM-yyyy");
        }

        Date date;
        try {

            date = new Date(Long.valueOf(timestamp));
            // Date date = new Date(Timestamp.valueOf(timestamp).getTime()); //
            // exception
            // Date date = new Date(timestamp); // exception
            // Date date = formatter.parse(timestamp); // exception
        } catch (Exception e) {
            date = new Date();
        }

        return formatter.format(date);
    }


    public static String formatDateForReceiptPrintDate(Date timestamp) {
        SimpleDateFormat formatter;
        try {

            // formatter = new SimpleDateFormat("EEE MMM d, y KK:mm:ss aaa");
            formatter = new SimpleDateFormat("dd-MMM-yyyy hh:mm:ss aaa");

        } catch (Exception e) {
            formatter = new SimpleDateFormat("dd-MMM-yyyy");
        }

        Date date;
        try {

            date = timestamp;
            // Date date = new Date(Timestamp.valueOf(timestamp).getTime()); //
            // exception
            // Date date = new Date(timestamp); // exception
            // Date date = formatter.parse(timestamp); // exception
        } catch (Exception e) {
            date = new Date();
        }

        return formatter.format(date);
    }


    public static String formatDateForReceipt(String timestamp) {
        SimpleDateFormat formatter;
        try {

            // formatter = new SimpleDateFormat("EEE MMM d, y KK:mm:ss aaa");
            formatter = new SimpleDateFormat("dd-MMM-yyyy");

        } catch (Exception e) {
            formatter = new SimpleDateFormat("dd-MMM-yyyy");
        }

        Date date;
        try {

            date = new Date(Long.valueOf(timestamp));
            // Date date = new Date(Timestamp.valueOf(timestamp).getTime()); //
            // exception
            // Date date = new Date(timestamp); // exception
            // Date date = formatter.parse(timestamp); // exception
        } catch (Exception e) {
            date = new Date();
        }

        return formatter.format(date);
    }

    public static String formatDate(String timestamp) {
        SimpleDateFormat formatter;
        try {

            // formatter = new SimpleDateFormat("EEE MMM d, y KK:mm:ss aaa");
            formatter = new SimpleDateFormat("EEE MMM d, y hh:mm:ss aaa");

        } catch (Exception e) {
            formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        }

        Date date;
        try {

            date = new Date(Long.valueOf(timestamp));
            // Date date = new Date(Timestamp.valueOf(timestamp).getTime()); //
            // exception
            // Date date = new Date(timestamp); // exception
            // Date date = formatter.parse(timestamp); // exception
        } catch (Exception e) {
            date = new Date();
        }

        return formatter.format(date);
    }

    public static String getYesterdayDateString(String dateTimeFormat) {
        SimpleDateFormat dateTimeFormatter = new SimpleDateFormat(dateTimeFormat);
        Calendar cal = Calendar.getInstance();
        cal.add(Calendar.DATE, -1);
        return dateTimeFormatter.format(cal.getTime());
    }

    public static String getCurrentTime() {
        Date date = new Date();
        SimpleDateFormat dateTimeFormatter = new SimpleDateFormat("yyyy/MM/dd HH mm ss a");
        return dateTimeFormatter.format(date);

    }


    public static String AmountInTakaFormat(Double amount) {

        DecimalFormat dFormat = new DecimalFormat("###,##,##,###.00");
        return dFormat.format(amount);
    }


    public static String toTitleCase(String input) {
        StringBuilder titleCase = new StringBuilder();
        boolean nextTitleCase = true;

        for (char c : input.toCharArray()) {
            if (Character.isSpaceChar(c)) {
                nextTitleCase = true;
            } else if (nextTitleCase) {
                c = Character.toTitleCase(c);
                nextTitleCase = false;
            }

            titleCase.append(c);
        }

        return titleCase.toString();
    }







    public static String setMobileNumberPrefix(String mobileNumber) {

        if (mobileNumber.startsWith("0")) {
            mobileNumber = "+88" + mobileNumber;
        } else if (mobileNumber.startsWith("88")) {

            mobileNumber = "+" + mobileNumber;

        } else if (mobileNumber.startsWith("+")) {

            return mobileNumber;
        }

        return mobileNumber;

    }

    public static String getServerAddressFromConfig(Context context) {
        Resources resources = context.getResources();
        AssetManager assetManager = resources.getAssets();
        String server_address = "";

        try {
            InputStream inputStream = assetManager.open("config.properties");
            Properties properties = new Properties();
            properties.load(inputStream);
            server_address = properties.getProperty("SERVER_ADDRESS");

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return server_address;

    }

    public static boolean isEmailMandatoryFromConfig(Context context) {
        Resources resources = context.getResources();
        AssetManager assetManager = resources.getAssets();
        boolean isEMailMandatory = true;

        try {
            InputStream inputStream = assetManager.open("config.properties");
            Properties properties = new Properties();
            properties.load(inputStream);
            isEMailMandatory = Boolean.parseBoolean(properties.getProperty("IS_EMAIL_MANDATORY"));

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return isEMailMandatory;

    }

    public static String roundUpFraction(String number) {

        try {

            // number = new java.text.DecimalFormat("#.00").format(Double
            // .valueOf(number));
            number = new DecimalFormat("0.00").format(Double.valueOf(number));

        } catch (Exception e) {
        }

        return number;
    }

    public static String getAppBuildNumber() {
        String buildNumber = "";
        return buildNumber;
    }

    public static ArrayList<String> getMonthList() {

        ArrayList<String> months = new ArrayList<String>();

        months.add("January");
        months.add("February");
        months.add("March");
        months.add("April");
        months.add("May");
        months.add("June");
        months.add("July");
        months.add("August");
        months.add("September");
        months.add("October");
        months.add("November");
        months.add("December");

        return months;

    }

    public static ArrayList<String> convertIntegerToStringArrayList(int iList[]) {

        ArrayList<String> sList = new ArrayList<String>();

        for (int i = 0; i < iList.length; ++i) {

            sList.add(String.valueOf(iList[i]));

        }

        return sList;

    }

    public static ArrayList<String> getPBSList() {

        ArrayList<String> pbsList = new ArrayList<String>();

        pbsList.add("Bagerhat PBS");
        pbsList.add("Barisal PBS-1");
        pbsList.add("Barisal PBS-2");
        pbsList.add("Bhola PBS");
        pbsList.add("Bogra PBS");
        pbsList.add("Brahman Baria PBS");
        pbsList.add("Chandpur PBS");
        pbsList.add("ChapaiNawabgonj PBS");
        pbsList.add("Chittagong PBS-1");
        pbsList.add("Chittagong PBS-2");
        pbsList.add("Chittagong PBS-3");
        pbsList.add("Comilla PBS-1");
        pbsList.add("Comilla PBS-2");
        pbsList.add("Comilla PBS-3");
        pbsList.add("Cox's Bazar PBS");
        pbsList.add("Dhaka PBS-1");
        pbsList.add("Dhaka PBS-2");
        pbsList.add("Dhaka PBS-3");
        pbsList.add("Dinajpur PBS-1");
        pbsList.add("Dinajpur PBS-2");
        ;

        return pbsList;

    }

    public static boolean setMobileDataEnabled(Context context, boolean enabled) {

        try {
            final ConnectivityManager conman = (ConnectivityManager) context
                    .getSystemService(Context.CONNECTIVITY_SERVICE);
            final Class conmanClass = Class.forName(conman.getClass().getName());
            final Field connectivityManagerField = conmanClass.getDeclaredField("mService");
            connectivityManagerField.setAccessible(true);
            final Object connectivityManager = connectivityManagerField.get(conman);
            final Class connectivityManagerClass = Class.forName(connectivityManager.getClass().getName());
            final Method setMobileDataEnabledMethod = connectivityManagerClass.getDeclaredMethod("setMobileDataEnabled",
                    Boolean.TYPE);
            setMobileDataEnabledMethod.setAccessible(true);

            setMobileDataEnabledMethod.invoke(connectivityManager, enabled);

            return true;
        } catch (Exception ex) {

            return false;

        }
    }


    public static Location getLocation(Context context) {

        LocationManager locationManager;
        Location location = null;
        Criteria criteria;

        String provider;

        locationManager = (LocationManager) context.getSystemService(Context.LOCATION_SERVICE);

        criteria = new Criteria();
        criteria.setAccuracy(Criteria.ACCURACY_COARSE);
        criteria.setCostAllowed(false);

        provider = locationManager.getBestProvider(criteria, false);

        //location = locationManager.getLastKnownLocation(provider);

        return location;

    }

    public static boolean isRightDevicePaired() {
        boolean rightDevicePaired = false;

        return rightDevicePaired;

    }

    public static void deleteCache(Context context) {
        try {
            File dir = context.getCacheDir();
            deleteDir(dir);
        } catch (Exception e) {
        }
    }

    public static boolean deleteDir(File dir) {
        if (dir != null && dir.isDirectory()) {
            String[] children = dir.list();
            for (int i = 0; i < children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
            return dir.delete();
        } else if (dir != null && dir.isFile())
            return dir.delete();
        else {
            return false;
        }
    }

    public static File IFRPic() {
        return getIFRPicFile("NID");
    }

    private static File getIFRPicFile(String string) {
        File IFRPicFile = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                AppName);

        if (!IFRPicFile.exists()) {
            if (!IFRPicFile.mkdirs()) {
                PrintError("Cant Create DIR");
                return null;
            }
        }
        File finalIFRPic = new File(IFRPicFile.getPath() + File.separator + string + ".jpg");
        if (finalIFRPic.exists()) {
            finalIFRPic.delete();
        }
        return finalIFRPic;
    }




    public static File ScaledFileForCheque() {
        return getScaledFileForCheque("scaled");
    }

    private static File getScaledFileForCheque(String string) {
        // TODO Auto-generated method stub
        File mediaStorageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirCheque.exists()) {
            if (!mediaStorageDirCheque.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirCheque.getPath() + File.separator + string + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static File ScaledFileForChequeBackFinal() {
        // TODO Auto-generated method stub
        return getScaledFileForChequeBackFinal("scaled_back_final");
    }

    private static File getScaledFileForChequeBackFinal(String strings) {
        // TODO Auto-generated method stub
        File mediaStorageDirChequeBack = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirChequeBack.exists()) {
            if (!mediaStorageDirChequeBack.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirChequeBack.getPath() + File.separator + strings + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static File ScaledFileForChequeBack() {
        return getScaledFileForChequeBack("scaled_back");
    }

    private static File getScaledFileForChequeBack(String string) {

        // TODO Auto-generated method stub
        File mediaStorageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirCheque.exists()) {
            if (!mediaStorageDirCheque.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirCheque.getPath() + File.separator + string + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static String vatPortionCalculate(double chargePlusVat) {
        double vat = getVat();

        double vatPortion = ((vat * chargePlusVat) / (vat + 100));
        DecimalFormat df = new DecimalFormat("####0.00");


        return df.format(vatPortion);
    }

    public static String chargePortionCalculate(double chargePlusVat) {
        DecimalFormat df = new DecimalFormat("####0.00");
        double vat = getVat();

        double vatPortion = ((vat * chargePlusVat) / (vat + 100));


        double chargePortion = chargePlusVat - vatPortion;

        return df.format(chargePortion);

    }


    private static double getVat() {
        //if metadata provides vat amount then get it from there if not then return 15.0
        return 15.0;
    }


}
