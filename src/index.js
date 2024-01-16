import _ from 'lodash-es'
import { padWithZeroes } from './utils'

export function isFilingNumber(number) {
    return number.startsWith('F/')
}

export function isCaseNumber(number) {
    return number.startsWith('R/')
}

export function formatCINumber(number) {
    return _.replace(number, /-/g, '')
}

export function formatOriginalCaseNumber(originalCaseNumber) {
    return _.replace(originalCaseNumber, /\//g, "-")
}

export function getInternalCaseNumber(originalCaseNumber) {

    // R/SCA/12319/2020
    let [category, caseType, caseNumber, year] = originalCaseNumber.split("/")

    const bindings = {
        "AO": 2001,
        "AS": 2051,
        "CA": 2003,
        "CAR": 2052,
        "CC": 2041,
        "CIA": 2032,
        "CCASE": 2042,
        "CECGA": 2054,
        "CECGR": 2055,
        "CMP": 2056,
        "COMA": 2057,
        "COMP": 2058,
        "CPTA": 2029,
        "CR": 208,
        "CRA": 2009,
        "CR.A": 2043,
        "CR.MA": 2044,
        "CR.RA": 2045,
        "CRREF": 2046,
        "CS": 2059,
        "EA": 2060,
        "EDA": 2061,
        "EDR": 2062,
        "EP": 2063,
        "EXTA": 2064,
        "EXTR": 2065,
        "FA": 2012,
        "GTA": 2066,
        "GTR": 2067,
        "ARBI.P": 2068,
        "ITA": 2069,
        "ITR": 2070,
        "LPA": 2014,
        "MCA": 2016,
        "MCACP": 2017,
        "OJ109": 2071,
        "OJA": 2072,
        "OJCAN": 2074,
        "OJCR": 2075,
        "OJMP": 2078,
        "OJRP": 2079,
        "OLR": 2080,
        "RA": 2081,
        "RERAA": 2097,
        "RP": 2082,
        "SA": 2019,
        "SCA": 2021,
        "SCR.A": 2047,
        "SJC": 2083,
        "SPTA": 2084,
        "SPTR": 2085,
        "SR": 2086,
        "STA": 2088,
        "ST": 2087,
        "STR": 2089,
        "SUTA": 2090,
        "SUTR": 2091,
        "TAXAP": 2092,
        "TEP": 2093,
        "WPPIL": 2026,
        "WTA": 2094,
        "WTR": 2095,
        "X-OBJ": 2023,
        "X-OBJ(O)": 2096
    }

    let caseTypeCode = bindings[caseType] + ""
    if (caseTypeCode) {
        let numberOfZeroToAdd = 15 - caseTypeCode.length - caseNumber.length - year.length
        caseNumber = padWithZeroes(caseNumber, numberOfZeroToAdd + caseNumber.length)
        console.log({ caseTypeCode }, { caseNumber }, { year })
        return caseTypeCode + caseNumber + year
    } else {
        console.log("no code found for " + caseType)
        return 0;
    }
}

export function getYearFromCaseNumber(caseNumber) {
    return caseNumber.substr(-4);
}